'use client';

import { useState } from 'react';

import PageHeader from '@/components/layout/PageHeader';
import { CSVPreview } from '@/components/upload/CSVPreview';
import { ImageFolderPreview } from '@/components/upload/ImageFolderPreview';
import { UploadDropzone } from '@/components/upload/UploadDropzone';
import { UploadProgress } from '@/components/upload/UploadProgress';
import { ValidationSummary } from '@/components/upload/ValidationSummary';

export default function UploadPage() {
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isReady, setIsReady] = useState(false);

  const cancelUpload = () => {
    setCsvFile(null);
    setImageFiles([]);
    setIsReady(false);
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Upload Dataset" subtitle="Select a product CSV and image folder to prepare a catalogue import." />
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          <UploadDropzone csvFile={csvFile} onCsvSelect={(file) => { setCsvFile(file); setIsReady(false); }} />
          <div className="grid gap-6 lg:grid-cols-2"><CSVPreview file={csvFile} onRemove={() => { setCsvFile(null); setIsReady(false); }} /><ImageFolderPreview files={imageFiles} onFilesSelect={(files) => { setImageFiles(files); setIsReady(false); }} onRemove={() => { setImageFiles([]); setIsReady(false); }} /></div>
          <ValidationSummary />
        </div>
        <UploadProgress csvFile={csvFile} imageCount={imageFiles.length} isReady={isReady} onCancel={cancelUpload} onProceed={() => setIsReady(true)} />
      </div>
    </div>
  );
}
