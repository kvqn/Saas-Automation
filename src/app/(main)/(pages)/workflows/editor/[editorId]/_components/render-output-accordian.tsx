import { ConnectionProviderProps } from "@/providers/connections-provider";
import { EditorState } from "@/providers/editor-provider";
import { useFuzzieStrore } from "@/store";
import React from "react";
import ContentBasedOnTitle from "./content-based-title";

type Props = {
  state: EditorState;
  nodeConnection: ConnectionProviderProps;
};

const RenderOutputAccordion = ({ state, nodeConnection }: Props) => {
  const {
    googleFile,
    setGoogleFile,
    selectedslackChannels,
    setSelectedslackChannels,
  } = useFuzzieStrore();
  return (
    <ContentBasedOnTitle
      nodeConnection={nodeConnection}
      newState={state}
      file={googleFile}
      setFile={setGoogleFile}
      selectedslackChannels={selectedslackChannels}
      setSelectedslackChannels={setSelectedslackChannels}
    />
  );
};

export default RenderOutputAccordion;
