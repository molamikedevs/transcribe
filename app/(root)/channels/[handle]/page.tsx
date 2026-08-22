interface Props {
  params: Promise<{ handle: string }>;
}

export default async function ChannelHandle({ params }: Props) {
  const { handle } = await params;
  return <div>Channel handle {handle}</div>;
}
