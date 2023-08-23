import React, { useState, useEffect } from 'react';
import notebookjs from 'notebookjs';
import { AnsiUp } from 'ansi_up';
// import marked from 'marked';

const JupyterNotebook = ({ notebookData }) => {
  const [htmlOutput, setHtmlOutput] = useState('');

  useEffect(() => {
    const notebook = notebookjs.parse(notebookData);
    const html = notebook.render().outerHTML;

    // Handle ANSI color codes
    const ansi_up = new AnsiUp();
    const coloredHtml = ansi_up.ansi_to_html(html);

    // Handle Markdown
    // const markedHtml = marked(coloredHtml);

    setHtmlOutput(coloredHtml);
  }, [notebookData]);

  return (
    <div
      className="jupyter-notebook"
      dangerouslySetInnerHTML={{ __html: htmlOutput }}
    />
  );
};

export default JupyterNotebook;