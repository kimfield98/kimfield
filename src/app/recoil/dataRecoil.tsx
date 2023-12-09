"use client"

import { RecoilRoot, atom } from "recoil";

//////// interface ////////
export interface DataType{
  dID: string;
  dSource: string;
  dStatus: string;
  dAlertLevel: string|null;
  dCountry: string;
  dDistrict: string|null;
  dType: string;
  dDate: string;
  dLatitude: number;
  dLongitude: number;
  dTitle: string|null;
  dDescription: string;
  dUrl: string;
}

export interface FilterType{
    selectedCountry: string,
    selectedDisaster: string[],
    selectedYear: number,
    selectedLive: boolean;
}

export interface UserType {
  isLoggedIn: boolean,
  userInfo: {
    name: string,
    email: string,
    provider: string,
    nation1: string,
    nation2: string,
    nation3: string,
    redAlert: boolean,
    orangeAlert: boolean,
    greenAlert: boolean,
  } | null,
}

export interface PostAlertInfo {
  objectId: string;
  alertEmail: string;
  alertDistrictName: string;
  alertCountryName: string;
  alertLatitude: number;
  alertLongitude: number;
  alertRadius: number;
  alertlevelRed: boolean;
  alertlevelOrange: boolean;
  alertlevelGreen: boolean;
  createAt: string;
  memo: string;
  open: boolean;
}


//////// atom ////////
export const dataState = atom<DataType[]>({
  key: 'dataState',
  default: [] as DataType[],
});

export const filterState = atom<FilterType>({
  key: 'filterState',
  default: {
    selectedCountry: "world",
    selectedDisaster: [],
    selectedYear: 2023,
    selectedLive: true,
  }
})

export const userLoginState = atom<UserType>({
  key: 'userLoginState',
  default: {
    isLoggedIn: false,
    userInfo: null,
  },
});

export const mailAlarmState = atom<PostAlertInfo>({
  key: 'mailAlarmState',
  default: {
    objectId: '',
    alertEmail: '',
    alertDistrictName: '' ,
    alertCountryName: '',
    alertLatitude: 0,
    alertLongitude: 0,
    alertRadius: 100,
    alertlevelRed: false,
    alertlevelOrange: false,
    alertlevelGreen: false,
    createAt: "",
    memo: "",
    open: false,
  },
});

export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}