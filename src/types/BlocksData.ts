export type CodingBlock = {
  id: string;
  type: 'handler' | 'action';
  slot: number;
};

type BlocksData = CodingBlock[];

export default BlocksData;
