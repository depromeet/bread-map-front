interface Geocode {
  address: string;
}

export interface GeocodePayload {
  documents: [
    {
      address: {
        address_name: string;
        b_code: string;
        h_code: string;
        main_address_no: string;
        mountain_yn: string;
        region_1depth_name: string;
        region_2depth_name: string;
        region_3depth_h_name: string;
        region_3depth_name: string;
        sub_address_no: string;
        x: string;
        y: string;
      };
      address_name: string;
      address_type: string;
      road_addressstring: {
        address_name: string;
        building_name: string;
        main_building_no: string;
        region_1depth_name: string;
        region_2depth_name: string;
        region_3depth_name: string;
        road_name: string;
        sub_building_no: string;
        underground_yn: string;
        x: string;
        y: string;
        zone_no: string;
      };
      x: string;
      y: string;
    }
  ];
  meta: { is_end: true; pageable_count: number; total_count: number };
}

const GEOCODE_API_URI = `https://dapi.kakao.com/v2/local/search/address`;

const requestGeocode = async ({
  address,
}: Geocode): Promise<GeocodePayload> => {
  const headers = new Headers();
  headers.append(
    'Authorization',
    `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_KEY}`
  );

  const geocodeResponse = await fetch(`${GEOCODE_API_URI}?query=${address}`, {
    headers,
  });

  const geocodeData = await geocodeResponse.json();
  return geocodeData;
};

export default requestGeocode;
