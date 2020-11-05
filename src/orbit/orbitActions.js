// OrbitDB Status
export const ORBIT_INITIALIZING = 'ORBIT_INITIALIZING';
export const ORBIT_INITIALIZED = 'ORBIT_INITIALIZED';
export const ORBIT_INIT_FAILED = 'ORBIT_INIT_FAILED';

// Identity Provider Status
export const ORBIT_IDENTITY_PROVIDER_ADD = 'ORBIT_IDENTITY_PROVIDER_ADD';
export const ORBIT_IDENTITY_PROVIDER_ADDED = 'ORBIT_IDENTITY_PROVIDER_ADDED';
export const ORBIT_IDENTITY_PROVIDER_FAILED = 'ORBIT_IDENTITY_PROVIDER_FAILED';

// Database Status
export const ORBIT_DATABASE_CREATING = 'ORBIT_DATABASE_CREATING';
export const ORBIT_DATABASE_CREATED = 'ORBIT_DATABASE_CREATED';
export const ORBIT_DATABASE_FAILED = 'ORBIT_DATABASE_FAILED';
export const ORBIT_DATABASE_LISTEN = 'ORBIT_DATABASE_LISTEN';

// Database Events
export const ORBIT_DATABASE_READY = 'ORBIT_DATABASE_READY';
export const ORBIT_DATABASE_REPLICATING = 'ORBIT_DATABASE_REPLICATING';
export const ORBIT_DATABASE_REPLICATED = 'ORBIT_DATABASE_REPLICATED';
export const ORBIT_DATABASE_WRITE = 'ORBIT_DATABASE_WRITE';

export function orbitInit (breeze, id) {
    return {
        type: ORBIT_INITIALIZING,
        breeze,
        id
    }
}

export function createOrbitDatabase (orbit, db) {
    return {
        type: ORBIT_DATABASE_CREATING,
        orbit,
        db
    }
}

