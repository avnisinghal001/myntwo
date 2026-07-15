'use client';

import { type ChangeEvent, type DragEvent, useRef, useState } from 'react';
import { FileSpreadsheet, FolderOpen, UploadCloud } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type UploadDropzoneProps = {
  onFileSelect: (fileName: string) => void;
};

export function UploadDropzone({ onFileSelect }: UploadDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const selectFile = (file?: File) => {
    if (file) onFileSelect(file.name);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => selectFile(event.target.files?.[0]);
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    selectFile(event.dataTransfer.files[0]);
  };

  return (
    <section className="rounded-xl border bg-card p-5">
      <div
        onDragEnter={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
        className={cn('flex min-h-64 flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 text-center transition-colors', isDragging ? 'border-primary bg-primary/5' : 'border-border bg-muted/20')}
      >
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary"><UploadCloud className="size-6" /></div>
        <h2 className="mt-4 text-base font-semibold text-foreground">Drop your product CSV here</h2>
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">Drag and drop a CSV file, or select one from your computer. Maximum file size: 25 MB.</p>
        <input ref={inputRef} onChange={handleChange} type="file" accept=".csv,text/csv" className="sr-only" aria-label="Select a CSV file" />
        <Button className="mt-5" onClick={() => inputRef.current?.click()}><FileSpreadsheet />Select CSV</Button>
      </div>
      <div className="mt-4 flex flex-col justify-between gap-3 rounded-lg border bg-muted/20 p-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3"><span className="flex size-8 items-center justify-center rounded-md bg-background text-muted-foreground"><FolderOpen className="size-4" /></span><div><p className="text-sm font-medium">Product images</p><p className="text-xs text-muted-foreground">Add image assets for matching product IDs.</p></div></div>
        <Button variant="outline" onClick={() => undefined}>Select Images Folder</Button>
      </div>
    </section>
  );
}
