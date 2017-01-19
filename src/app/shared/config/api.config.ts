import { OpaqueToken } from '@angular/core';

export let API_CONFIG = new OpaqueToken('api.config');

export interface ApiConfig {
  githubUsername: string;
  apiRepoName: string;
  pathToApi: string;
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  githubUsername: 'rxjs-space',
  apiRepoName: 'user-ui-api',
  pathToApi: ''
};
