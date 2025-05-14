'use client';
export default function Profile() {
  const user = JSON.parse(localStorage.getItem('auth') || 'false');

  return user ? <span style={{cursor: 'default'}}>{user.email}</span> : null;
}
