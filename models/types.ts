

export interface GeoPoint {
    __type: string;
    latitude: number;
    longitude: number;
}

export interface Restaurant {
    objectId: string;
    address: string;
    name: string;
    url: string;
    time: string;
    createdAt: string; // convert back to date
    updatedAt: string; // convert back to date
    GeoPoint: GeoPoint;
    HotelID: string;
    MoreInfo: string;
    StartTime: number;
    EndTime: number;
    StartHr: number;
    StartMin: number;
    EndHr: number;
    EndMin: number;
    TimeArr: number[];
    OverLay: string;
    overlayBan: boolean;
}
  
