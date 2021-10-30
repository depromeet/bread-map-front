import createEmotionServer from '@emotion/server/create-instance';
import createCache from "@emotion/cache";
import type { EmotionCache } from '@emotion/cache';

const key: 'DAEDONG' = 'DAEDONG';
const cache: EmotionCache = createCache({ key });

const ssrRenderer = async (html: string): Promise<{
	html: string;
	ids: string[];
	css: string;
}> => {
	const { extractCritical } = createEmotionServer(cache);
	const { ids, css } = extractCritical(html);

	return {
		html,
		ids,
		css,
	};
};

export default ssrRenderer;
