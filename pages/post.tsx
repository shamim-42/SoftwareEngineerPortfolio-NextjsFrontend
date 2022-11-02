import TextEditor from '@/components/ui/editor/editor';
import SectionBlock from '@/components/ui/section-block';
import type { NextPage } from 'next';

const Post: NextPage = () => {
  return (
    <SectionBlock>
      <TextEditor />
    </SectionBlock>
  );
};

export default Post;
