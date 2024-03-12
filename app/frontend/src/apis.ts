import type { RegisterRequestDTO } from '@lib/core/models'

export namespace AloneApiRequest {
  namespace Identity {
    export function register(request: RegisterRequestDTO): Promise<{ token: string }> {
      return { token: 'string' }
    }
  }
}
