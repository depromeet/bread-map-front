import { fetchWithToken } from '@/remotes/network/fetchBase';

interface DeleteImagePayload {
  fileName: string;
}

const requestDeleteImage = async ({
  fileName,
}: DeleteImagePayload): Promise<void> => {
  await fetchWithToken(`/s3/image?fileName=${fileName}`);
  return;
};

export default requestDeleteImage;
