import { Metadata } from 'next'
import LoginForm from '@/app/(auth)/auth/signin/LoginForm'

export const metadata: Metadata = {
  title: 'เข้าสู่ระบบ',
  description: 'Sign in to your account to access AI Native App features and manage your settings.',
  keywords: ['signin', 'login', 'authentication', 'account access', 'AI Native App']
}

const SigninPage = () => {
  return <LoginForm />
}

export default SigninPage
