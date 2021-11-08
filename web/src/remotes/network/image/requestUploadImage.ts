import fetchBase from '@/remotes/network/fetchBase';

interface UploadImagePayload {
  files: File[];
}

type UploadImageResponse = string[];

const requestUploadImage = async (
  payload: UploadImagePayload
): Promise<UploadImageResponse> => {
  const formData = new FormData();

  for (const file of payload.files) {
    formData.append('multipartFile', file);
  }

  const resp = await fetchBase('/s3/image', {
    method: 'POST',
    body: formData,
  });
  const data = await resp.json();
  return data;
};

export default requestUploadImage;
