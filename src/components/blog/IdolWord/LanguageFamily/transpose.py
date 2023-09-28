import PyPDF2

pdf_path = 'PIEroots.pdf'
pdf_text = []

with open(pdf_path, 'rb') as pdf_file:
    pdf_reader = PyPDF2.PdfReader(pdf_file)
    for page in pdf_reader.pages:
        pdf_text.append(page.extract_text())

html_output_path = 'PIEroots.html'

with open(html_output_path, 'w', encoding='utf-8') as html_file:
    html_file.write('<html>\n<head><title>PDF to HTML</title></head>\n<body>\n')

    for page_number, page_text in enumerate(pdf_text, start=1):
        html_file.write(f'<div id="page_{page_number}">\n')
        html_file.write(f'Page {page_number}<br>\n')
        html_file.write(page_text.replace('\n', '<br>\n'))
        html_file.write('</div>\n')

    html_file.write('</body>\n</html>')
