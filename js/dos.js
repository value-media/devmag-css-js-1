const getFirst = arr => arr[0];

class EnhancedArray extends Array {
    first() { return this[0]; }
}

const createCollection = arr => ({ data: arr, first: () => arr[0] });

const arr1 = new EnhancedArray(22, 33, 11);
const col1 = createCollection([ 43, 22, 11, 33]);

console.log('coll first', col1.first(), ', array first', arr1.first());

/// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Use a map of handlers instead of string manipulation
const actionHandlers = {
    create: function handleCreate(targetObject, parameters) { /* ... */ },
    update: function handleUpdate(targetObject, parameters) { /* ... */ },
    delete: function handleDelete(targetObject, parameters) { /* ... */ },
    // Add more handlers as needed
  };
  
  function processAction(action, context) {
    const handler = actionHandlers[action.type];
    
    // Use specific accessors instead of dynamic property paths
    const targetObject = getTargetObject(context, action);
    
    if (handler) {
      return handler.call(this, targetObject, action.parameters);
    }
    
    // Fall back with explicit operation type checking
    return this.executeOperation(action.operationType, targetObject, action.parameters);
  }
  
  // Use specific accessor functions instead of generic string paths
  function getTargetObject(context, action) {
    switch (action.targetType) {
      case 'user':
        return context.users[action.targetId];
      case 'order':
        return context.orders[action.targetId];
      // Other cases...
      default:
        throw new Error(`Unknown target type: ${action.targetType}`);
    }
  }