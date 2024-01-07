import NodeCache from 'node-cache';

const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120, maxKeys: 1000 });

class CacheManager {
    static set(key, value) {
        myCache.set(key, value);
    }
    static get(key) {
        return myCache.get(key);
    }
}

function testCache() {
    CacheManager.set('test', new Date());
    CacheManager.set('test2', new Date());
    const stats = myCache.getStats();
    const result = CacheManager.get('test');
    console.log('cached:', { result, stats });
}

testCache();