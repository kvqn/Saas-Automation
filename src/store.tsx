import { create } from "zustand";

export interface Option {
  value: string;
  label: string;
  disable?: boolean;

  fixed?: boolean;
  [key: string]: string | boolean | undefined;
}

type fuzzieStroe = {
  googleFile: any;
  setGoogleFile: (googleFile: any) => void;
  slackChannels: Option[];
  setSlackChannels: (slackChannels: Option[]) => void;
  selectedslackChannels: Option[];
  setSelectedslackChannels: (selectedslackChannels: Option[]) => void;
};

export const useFuzzieStrore = create<fuzzieStroe>((set) => ({
  googleFile: {},
  setGoogleFile: (googleFile: any) => set({ googleFile }),
  slackChannels: [],
  setSlackChannels: (slackChannels: Option[]) => set({ slackChannels }),
  selectedslackChannels: [],
  setSelectedslackChannels: (selectedslackChannels: Option[]) =>
    set({ selectedslackChannels }),
}));
