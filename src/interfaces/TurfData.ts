export interface Location {
    country: string;
    iso_country_code: string;
    state: string;
    district: string;
    place: string;
    locality: string;
    type: string;
    coordinates: [number, number];
  }
  
  export interface SlotDetails {
    parent: number;
    sport_id?: {
      $oid: string;
    };
    root_id?: {
      $oid: string;
    };
    ground_name: string;
    slot_name: string;
    slot_title: string;
    slot_id?: {
      $oid: string;
    };

    membership_plan_status: number;
    advance_payment: number;
    advance_payment_value: number;
    display_slot_name?: string;
    minimum_bookable_time: number;
    maximum_bookable_time: number;
    visibility: number;
    fixed_hours: number;
    is_merged?: any;
    settlement_category?: {
      $oid: string;
    };
    settlement_category_tags?: any[];
  }
  
  export interface TurfData {
    _id: string;
    turf_name: string;
    location: Location;
    images: string[];
    slot_details: SlotDetails[];
    turf_currency: string;
    time_offset: string;
    time_offset_in_minute: number;
    turf_currency_symbol: string;
    turf_logo: string;
  }

  interface TurfDataApiResponse {
    status: number,
    message: string,
    token: string,
    tid: string,
    tkey: string,
    turf_data: TurfData[],
    type: number
  }

  
  export default TurfDataApiResponse;
  