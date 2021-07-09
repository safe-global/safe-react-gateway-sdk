import config from './config'
import { fetchJson, insertParam } from './utils'
import { paths } from './types/gateway'

export function callEndpoint<T extends keyof paths>(
  network: string,
  path: T,
  params: paths[T]['get']['parameters'],
): Promise<{ data: paths[T]['get']['responses'][200]['schema'] }> {
  const baseUrl = insertParam(config.baseUrl, 'network', network)

  const pathname = Object.keys(params.path).reduce((result: string, key) => {
    return insertParam(result, key, params.path[key as keyof typeof params.path])
  }, path as string)

  return fetchJson(`${baseUrl}${pathname}`, (params as any).query)
}