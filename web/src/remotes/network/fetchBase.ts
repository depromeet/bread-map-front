import { setRefreshTime } from './auth/authUtil';

const arrayTypeGuard = (headers?: HeadersInit): headers is string[][] => {
  if (Array.isArray(headers)) return true;
  return false;
};

const recordTypeGuard = (
  headers?: HeadersInit
): headers is Record<string, string> => {
  if (typeof headers !== 'object') return false;
  if (headers.toString() !== '[object Object]') return false;
  return true;
};

const headersTypeGuard = (headers?: HeadersInit): headers is Headers => {
  if (typeof headers !== 'object') return false;
  if (headers.toString() !== '[object Headers]') return false;
  return true;
};

const initHeader = (init?: HeadersInit): HeadersInit | undefined => {
  if (init === undefined) return undefined;

  const ret: Record<string, string> = {};

  if (arrayTypeGuard(init)) {
    init.forEach(([key, value]) => {
      ret[key] = value;
    });
  }

  if (recordTypeGuard(init)) {
    Object.keys(init).forEach((key) => {
      ret[key] = init[key];
    });
  }

  if (headersTypeGuard(init)) {
    for (const [key, value] of init.entries()) {
      ret[key] = value;
    }
  }

  return ret;
};

export default function fetchBase(
  url: string,
  init?: RequestInit | undefined
): Promise<Response> {
  const headers = initHeader(init?.headers);

  return fetch(`${process.env.NEXT_PUBLIC_BASE_URI}${url}`, {
    ...init,
    headers,
  });
}

export function fetchWithToken(
  url: string,
  init?: RequestInit | undefined
): Promise<Response> {
  const token = localStorage.getItem('accessToken');
  setRefreshTime();

  const headers = new Headers(init?.headers);
  headers.append('Authorization', `Bearer ${token}`);

  return fetch(`${process.env.NEXT_PUBLIC_BASE_URI}${url}`, {
    ...init,
    headers,
  });
}
