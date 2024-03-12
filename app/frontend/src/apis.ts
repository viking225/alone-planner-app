import type { RegisterRequestDTO } from '@lib/core/models'
import type { User } from '@libs/core/models'

export namespace AloneApiRequest {
  export namespace Identity {
    export function register(request: RegisterRequestDTO): Promise<{ token: string }> {
      return { token: 'string' }
    }

    export function fetchMe(token: string): Promise<{ user: User }> {
      return {
        user: {
          email: 'kevin@tanoh.fr'
        }
      }
    }
  }
}
