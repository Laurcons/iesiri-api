// import dotenv from 'dotenv';

// dotenv.config();

function tryGet<T = string>(key: string, transform?: (val: string) => T): T {
  const val = process.env[key];
  if (!val) throw new Error(`Missing envvar ${key}`);
  if (transform) {
    return transform(val);
  }
  return val as T;
}

export const Config = {
  server: {
    port: parseInt(process.env.PORT || '3000'),
  },
  jwt: {
    secret: tryGet('JWT_SECRET', (s) => new TextEncoder().encode(s)),
  },
};
