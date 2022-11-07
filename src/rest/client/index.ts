import type {
  AuthResponse,
  ChangePasswordUserInput,
  CreateContactUsInput,
  EducationData,
  ForgotPasswordUserInput,
  LoginUserInput,
  PasswordChangeResponse,
  RegisterUserInput,
  ResetPasswordUserInput,
  SocialLoginInputType,
  User,
  VerifyForgotPasswordUserInput,
} from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { HttpClient } from './http-client';

class Client {
  users = {
    me: () => HttpClient.get<User>(API_ENDPOINTS.USERS_ME),
    login: (input: LoginUserInput) =>
      HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_LOGIN, input),
    socialLogin: (input: SocialLoginInputType) =>
      HttpClient.post<AuthResponse>(API_ENDPOINTS.SOCIAL_LOGIN, input),
    register: (input: RegisterUserInput) =>
      HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_REGISTER, input),
    forgotPassword: (input: ForgotPasswordUserInput) =>
      HttpClient.post<PasswordChangeResponse>(
        API_ENDPOINTS.USERS_FORGOT_PASSWORD,
        input
      ),
    verifyForgotPasswordToken: (input: VerifyForgotPasswordUserInput) =>
      HttpClient.post<PasswordChangeResponse>(
        API_ENDPOINTS.USERS_VERIFY_FORGOT_PASSWORD_TOKEN,
        input
      ),
    resetPassword: (input: ResetPasswordUserInput) =>
      HttpClient.post<PasswordChangeResponse>(
        API_ENDPOINTS.USERS_RESET_PASSWORD,
        input
      ),
    changePassword: (input: ChangePasswordUserInput) =>
      HttpClient.post<PasswordChangeResponse>(
        API_ENDPOINTS.USERS_CHANGE_PASSWORD,
        input
      ),
    logout: () => HttpClient.post<boolean>(API_ENDPOINTS.USERS_LOGOUT, {}),
    subscribe: (input: { email: string }) =>
      HttpClient.post<any>(API_ENDPOINTS.USERS_SUBSCRIBE_TO_NEWSLETTER, input),
    contactUs: (input: CreateContactUsInput) =>
      HttpClient.post<any>(API_ENDPOINTS.USERS_CONTACT_US, input),
  };

  educations = {
    all: () => HttpClient.get<EducationData>(API_ENDPOINTS.EDUCATION),
  };

  skills = {
    all: () => HttpClient.get(API_ENDPOINTS.SKILLS),
  };

  experiences = {
    all: () => HttpClient.get(API_ENDPOINTS.EXPERIENCE),
  };

  basicData = {
    all: () => HttpClient.get(API_ENDPOINTS.BASIC_DATA),
    single: () => HttpClient.get(`${API_ENDPOINTS.BASIC_DATA}/1`),
  };

  blogData = {
    all: () => HttpClient.get(`${API_ENDPOINTS.BLOGS}?populate=%2A`),
    getByID: (id: string) => HttpClient.get(`${API_ENDPOINTS.BLOGS}/${id}`),
    newBlog: (blog: any) => HttpClient.post(API_ENDPOINTS.BLOGS, blog),
    deleteBlog: (id: any) => HttpClient.delete(`${API_ENDPOINTS.BLOGS}/${id}`),
  };

  categoryData = {
    all: () => HttpClient.get(`${API_ENDPOINTS.CATEGORY}?populate=%2A`),
  };

  media = {
    thumbnail: (formData: any) =>
      HttpClient.post(API_ENDPOINTS.UPLOAD, formData),
  };
}

export default new Client();
