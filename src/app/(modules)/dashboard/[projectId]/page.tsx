'use client';
import {useParams} from 'next/navigation';

export default function ProjectPage() {
  const {projectId} = useParams();
  return <h1>Project page {projectId}</h1>;
}
