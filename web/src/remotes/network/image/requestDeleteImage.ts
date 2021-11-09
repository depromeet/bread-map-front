import fetchBase from '@/remotes/network/fetchBase';

interface DeleteImagePayload {
  fileName: string;
}

const requestDeleteImage = async ({
  fileName,
}: DeleteImagePayload): Promise<void> => {
  const resp = await fetchBase(`/s3/image?fileName=${fileName}`);
  return;
};

export default requestDeleteImage;
