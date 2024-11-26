// Importing node-cache for caching operations
const NodeCache = require('node-cache');
const myCache = new NodeCache();

class CacheManager {
  // Method for setting cache
  static set(key, value, ttl = 10000) {
    myCache.set(key, value, ttl);
  }
  // Method for getting cache
  static get(key) {
    return myCache.get(key);
  }
}

CacheManager.set('name', 'Tomek');

const name = CacheManager.get('name');

console.log('cache manager: ', { name });
