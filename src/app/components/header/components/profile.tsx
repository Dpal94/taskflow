'use client';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('auth') || 'false');

  return user ? <span>{user.email}</span> : null;
}
