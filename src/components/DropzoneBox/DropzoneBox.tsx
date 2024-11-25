// import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { CloudArrowUpIcon, DocumentArrowDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Group, Text } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export default function DropzoneBox(props: Partial<DropzoneProps>) {
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group justify="center" mih={160} style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <DocumentArrowDownIcon className="w-10" />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <XMarkIcon className="w-10 h-10" />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <CloudArrowUpIcon className="w-12 text-gray-400" />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" c="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}
