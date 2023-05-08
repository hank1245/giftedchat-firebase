import { SignUpProps } from '../pages/SignUpPage';

export function validate(form: SignUpProps) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!emailRegex.test(form.email)) {
    return '이메일 형식이 올바르지 않습니다.';
  } else if (form.password.length < 4) {
    return '4자리 이상의 비밀번호를 입력해주세요.';
  } else if (form.password !== form.confirmPassowrd) {
    return '비밀번호 불일치.';
  } else {
    return '';
  }
}
