import dynamic from 'next/dynamic';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
});

const TextEditor = ({ setBlogText, blogText }: any) => {
  const handleOnChange = (data: string) => {
    setBlogText(data);
  };

  return (
    <div>
      <h2 className="p-2 text-left text-sm font-medium">Blog Details</h2>
      <SunEditor
        placeholder="Please type here..."
        onChange={handleOnChange}
        setOptions={{
          height: '460',
          font: [
            '"Open Sans"',
            '"Tiro Bangla"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
          ],
          buttonList: [
            [
              'bold',
              'underline',
              'italic',
              'strike',
              'subscript',
              'superscript',
            ],
            ['font', 'fontSize', 'formatBlock'],
            [
              'paragraphStyle',
              'blockquote',
              'list',
              'table',
              'horizontalRule',
              'link',
              'image',
            ],
            [
              'outdent',
              'indent',
              'fontColor',
              'hiliteColor',
              'textStyle',
              'align',
              'lineHeight',
            ],
            ['fullScreen', 'showBlocks', 'codeView'],
            ['removeFormat', 'undo', 'redo', 'save'],
          ],
        }}
        setContents={blogText}
      />
    </div>
  );
};
export default TextEditor;
