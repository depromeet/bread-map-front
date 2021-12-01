export type SocialProvider = 'google' | 'kakao';

export interface LoginResponse {
  appToken: string;
  isNewMember: boolean;
}
