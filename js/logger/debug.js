const DebugKit = {
    async measureAsync(name, fn) {
        performance.mark(`${name}-start`);
        const result = await fn();
        performance.mark(`${name}-end`);
        performance.measure(name, `${name}-start`, `${name}-end`);
        return result;
    },

    createSnapshot(obj) {
        return JSON.parse(JSON.stringify(obj));
    },

    diff(prev, current) {
        return Object.entries(current).reduce(
            (acc, [key, value]) => {
                if(prev[key] != value) {
                    acc[key] = {
                        from: prev[key],
                        to: value
                    };
                }
                return acc;
            },
            {}
        );
    },

    monitor(obj, props) {
        return new Proxy(obj, {
            set(target, prop, value) {
                if (props.includes(prop)) {
                    console.log(`${prop} changed`, {
                        from: target[prop],
                        to: value
                    });
                }
                target[prop] = value;
                return true;
            }
        });
    }
} 