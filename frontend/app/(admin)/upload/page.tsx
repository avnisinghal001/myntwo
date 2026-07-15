'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';

import PageHeader from '@/components/layout/PageHeader';
import { FilePreview } from '@/components/upload/FilePreview';
import { UploadDropzone } from '@/components/upload/UploadDropzone';
import { UploadSummary } from '@/components/upload/UploadSummary';
import { ValidationResults } from '@/components/upload/ValidationResults';
import { Button } from '@/components/ui/button';

export default function UploadPage() {
  const [fileName, setFileName] = useState('myntra-catalogue-july-2026.csv');

  return (
    <div className="space-y-6">
      <PageHeader title="Upload Dataset" subtitle="Add a product CSV and matching images to prepare your catalogue import." actions={<Button><Upload />Start upload</Button>} />
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-6"><UploadDropzone onFileSelect={setFileName} /><FilePreview fileName={fileName} /><ValidationResults /></div>
        <UploadSummary />
      </div>
    </div>
  );
}
