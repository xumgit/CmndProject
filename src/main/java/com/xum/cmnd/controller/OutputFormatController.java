package com.xum.cmnd.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.util.LinkedHashMap;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.poi.xwpf.usermodel.Borders;
import org.apache.poi.xwpf.usermodel.BreakClear;
import org.apache.poi.xwpf.usermodel.BreakType;
import org.apache.poi.xwpf.usermodel.LineSpacingRule;
import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.TextAlignment;
import org.apache.poi.xwpf.usermodel.UnderlinePatterns;
import org.apache.poi.xwpf.usermodel.VerticalAlign;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chapter;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Section;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfContentByte;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPRow;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfStamper;
import com.itextpdf.text.pdf.PdfWriter;
import com.xum.cmnd.pojo.Devices;
import com.xum.cmnd.pojo.DevicesWithBLOBs;
import com.xum.cmnd.service.DevicesService;
import com.xum.cmnd.utils.ExportExcelUtils;

@Controller
@RequestMapping(value = "/output")
public class OutputFormatController {

	private static final Logger LOG = LogManager.getLogger(OutputFormatController.class);
	
	@Autowired
	private DevicesService devicesService;
	
	@RequestMapping(value = "/out", method = RequestMethod.GET)
	public String outPutExample() {
		return "output/output";
	}
	
	@RequestMapping(value = "/pdf", method = RequestMethod.GET)
	public void pdfExample(ModelMap model, HttpServletResponse response) {
		//String status = "success";
		String webRoot = System.getProperty("web.root");
		String uploadPath = webRoot + "static" + File.separator + "upload";
		File file = new File(uploadPath);
		if (!file.exists()) {
			LOG.info("mkdir file=" + uploadPath);
			file.mkdirs();
		}
		String fileName = "test.pdf";
		String filePath = uploadPath + File.separator + fileName;
		File pdfFile = new File(filePath);
		if (pdfFile.exists()) {
			LOG.info(fileName + " had exist, need delete");
			pdfFile.delete();
		}
		
		Document document = new Document();
		try {					
			PdfWriter writer = PdfWriter.getInstance(document, new FileOutputStream(filePath));
			document.open();
			document.add(new Paragraph("Hello World!"));

			String imageFilePath = webRoot + "static" + File.separator + "images" + File.separator + "img1.jpg";
			File imageFile = new File(imageFilePath);
			if (imageFile.exists()) {
				Image image;
				image = Image.getInstance(imageFilePath);
				image.setAbsolutePosition(100f, 550f);
				image.scaleAbsolute(160, 90);
				document.add(image);
			}

			PdfPTable table = new PdfPTable(3);
			table.setWidthPercentage(100);
			table.setSpacingBefore(10f);
			table.setSpacingAfter(10f);

			List<PdfPRow> listRow = table.getRows();
			float[] columnWidths = {1f, 2f, 3f};
			table.setWidths(columnWidths);

			PdfPCell cells1[] = new PdfPCell[3];
			PdfPRow row1 = new PdfPRow(cells1);

			cells1[0] = new PdfPCell(new Paragraph("111"));
			cells1[0].setBorderColor(BaseColor.BLUE);
			//cells1[0].setPaddingLeft(20);
			cells1[0].setHorizontalAlignment(Element.ALIGN_CENTER);
			cells1[0].setVerticalAlignment(Element.ALIGN_MIDDLE);

			cells1[1] = new PdfPCell(new Paragraph("222"));
			cells1[1].setHorizontalAlignment(Element.ALIGN_CENTER);
			cells1[1].setVerticalAlignment(Element.ALIGN_MIDDLE);
			
			cells1[2] = new PdfPCell(new Paragraph("333"));
			cells1[2].setHorizontalAlignment(Element.ALIGN_CENTER);
			cells1[2].setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell cells2[] = new PdfPCell[3];
			PdfPRow row2 = new PdfPRow(cells2);
			cells2[0] = new PdfPCell(new Paragraph("444"));
			cells2[0].setHorizontalAlignment(Element.ALIGN_CENTER);
			cells2[0].setVerticalAlignment(Element.ALIGN_MIDDLE);
			
			cells2[1] = new PdfPCell(new Paragraph("555"));
			cells2[1].setHorizontalAlignment(Element.ALIGN_CENTER);
			cells2[1].setVerticalAlignment(Element.ALIGN_MIDDLE);
			
			cells2[2] = new PdfPCell(new Paragraph("666"));
			cells2[2].setHorizontalAlignment(Element.ALIGN_CENTER);
			cells2[2].setVerticalAlignment(Element.ALIGN_MIDDLE);

			listRow.add(row1);
			listRow.add(row2);
			document.add(table);

			/*
			 * // 添加有序列表 List orderedList = new List(List.ORDERED);
			 * orderedList.add(new ListItem("Item one")); orderedList.add(new
			 * ListItem("Item two")); orderedList.add(new
			 * ListItem("Item three")); document.add(orderedList);
			 */

			// 中文字体,解决中文不能显示问题
			BaseFont bfChinese = BaseFont.createFont("STSong-Light", "UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);

			Font blueFont = new Font(bfChinese);
			blueFont.setColor(BaseColor.BLUE);
			Paragraph paragraphBlue = new Paragraph("paragraphOne blue front", blueFont);
			document.add(paragraphBlue);

			// 绿色字体
			Font greenFont = new Font(bfChinese);
			greenFont.setColor(BaseColor.GREEN);
			// 创建章节
			Paragraph chapterTitle = new Paragraph("Paragraphxxxx", greenFont);
			Chapter chapter1 = new Chapter(chapterTitle, 1);
			chapter1.setNumberDepth(0);

			Paragraph sectionTitle = new Paragraph("partial title", greenFont);
			Section section1 = chapter1.addSection(sectionTitle);

			Paragraph sectionContent = new Paragraph("partial content", blueFont);
			section1.add(sectionContent);

			// 将章节添加到文章中
			document.add(chapter1);

			document.addTitle("this is a title");
			document.addAuthor("test");
			document.addSubject("this is subject");
			document.addKeywords("Keywords");
			document.addCreationDate();			
			document.close();
			writer.close();
			//fout.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			//status = "failure";
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
		} catch (DocumentException e) {
			// TODO Auto-generated catch block
			//status = "failure";
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			//status = "failure";
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			//status = "failure";
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
		}
		
		try {
			FileInputStream fileInputStream = new FileInputStream(filePath);
			ServletOutputStream outputStream = response.getOutputStream();
			response.setHeader("content-disposition", "attachment;filename=" + fileName);
			response.setHeader("content-type", "application/pdf");
			int len = 1;
			byte[] bs = new byte[1024];
			while ((len = fileInputStream.read(bs)) != -1) {
				outputStream.write(bs, 0, len);
			}
			fileInputStream.close();
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}
		LOG.info("pdfExample end");
    	//model.addAttribute("status", status);
		//return "output/pdf";
	}

	@RequestMapping(value = "/readpdf", method = RequestMethod.GET)
	public String pdfReadExample(ModelMap model) {
		String status = "success";
		String webRoot = System.getProperty("web.root");
		String fileName = "test.pdf";
		String uploadPath = webRoot + "static" + File.separator + "upload" + File.separator + fileName;
		try {
			File file = new File(uploadPath);
			if (file.exists()) {
				PdfReader pdfReader;
				pdfReader = new PdfReader(uploadPath);
				PdfStamper pdfStamper;
				pdfStamper = new PdfStamper(pdfReader, new FileOutputStream(uploadPath));

				String imageFilePath = webRoot + "static" + File.separator + "images" + File.separator + "img2.jpg";
				File imageFile = new File(imageFilePath);
				if (imageFile.exists()) {
					Image image = Image.getInstance(imageFilePath);
					image.scaleAbsolute(160, 90);
					image.setAbsolutePosition(0, 700);
					for (int i = 1; i <= pdfReader.getNumberOfPages(); i++) {
						PdfContentByte content = pdfStamper.getUnderContent(i);
						content.addImage(image);
					}
				}
				pdfStamper.close();
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			status = "failure";
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
		} catch (DocumentException e) {
			// TODO Auto-generated catch block
			status = "failure";
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			status = "failure";
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
		}
		LOG.info("pdfReadExample end");
		model.addAttribute("status", status);
		return "output/readpdf";
	}
	
	@RequestMapping(value = "/excel", method = RequestMethod.GET)
	public void excelExample(ModelMap model, HttpServletRequest request, HttpServletResponse response) {
		//String status = "success";
		List<Devices> devicesList = this.devicesService.selectAllByList();
		String excelName = "test";
		LinkedHashMap<String, String> fieldMap = new LinkedHashMap<String, String>();
		String[] fieldNames = new String[]{"id","tvname","tvmodelnumber","tvserialnumber","tvroomid","tvmacaddress","tvipaddress","vsecuretvid",
										"type","powerstatus","tvuniqueid","firmwareid","cloneid","lastclonerename","status","progress","siCloneIdentifiers",
										"siFirmwareIdentifier","tvCloneIdentifiers","tvFirmwareIdentifier","successSicloneIdentifier","successTvcloneIdentifier",
										"cloneColor","fwColor","createddate","modifieddate","lastonline","cloneMode","uploadProgress","uploadSessionId",
										"uploadSessionStart","uploadSessionEnd","uploadSessionStatus","channelColor","appColor","upgradeType","networkinterfaceip"};
		int fileLen = fieldNames.length;
		for(int i = 0; i < fileLen; i++) {
			fieldMap.put(fieldNames[i], fieldNames[i]);
		}
        new ExportExcelUtils().export(excelName, devicesList, fieldMap, response);
        LOG.info("excelExample end");
		//model.addAttribute("status", status);
		//return "output/excel";
	}
	
	@RequestMapping(value = "/word", method = RequestMethod.GET)
	public void wordExample(ModelMap model, HttpServletResponse response){  
		// http://poi.apache.org/apidocs/org/apache/poi/xwpf/usermodel/XWPFParagraph.html#isWordWrapped--
		//String status = "success";
        XWPFDocument doc = new XWPFDocument();  
  
        XWPFParagraph p1 = doc.createParagraph();  
        p1.setAlignment(ParagraphAlignment.CENTER);  
        p1.setBorderBottom(Borders.DOUBLE);  
        p1.setBorderTop(Borders.DOUBLE);  
  
        p1.setBorderRight(Borders.DOUBLE);  
        p1.setBorderLeft(Borders.DOUBLE);  
        p1.setBorderBetween(Borders.SINGLE);  
  
        p1.setVerticalAlignment(TextAlignment.TOP);  
  
        XWPFRun r1 = p1.createRun();  
        r1.setBold(true);  
        r1.setText("The quick brown fox");  
        r1.setBold(true);  
        r1.setFontFamily("Courier");  
        r1.setUnderline(UnderlinePatterns.DOT_DOT_DASH);  
        r1.setTextPosition(100);  
  
        XWPFParagraph p2 = doc.createParagraph();  
        p2.setAlignment(ParagraphAlignment.RIGHT);  
  
        //BORDERS  
        p2.setBorderBottom(Borders.DOUBLE);  
        p2.setBorderTop(Borders.DOUBLE);  
        p2.setBorderRight(Borders.DOUBLE);  
        p2.setBorderLeft(Borders.DOUBLE);  
        p2.setBorderBetween(Borders.SINGLE);  
  
        XWPFRun r2 = p2.createRun();  
        r2.setText("jumped over the lazy dog");  
        r2.setStrikeThrough(true);  
        r2.setFontSize(20);  
  
        XWPFRun r3 = p2.createRun();  
        r3.setText("and went away");  
        r3.setStrikeThrough(true);  
        r3.setFontSize(20);  
        r3.setSubscript(VerticalAlign.SUPERSCRIPT);  
  
  
        XWPFParagraph p3 = doc.createParagraph();  
        p3.setWordWrapped(true);  
        p3.setPageBreak(true);  
  
        //p3.setAlignment(ParagraphAlignment.DISTRIBUTE);  
        p3.setAlignment(ParagraphAlignment.BOTH);  
        p3.setSpacingLineRule(LineSpacingRule.EXACT);  
  
        p3.setIndentationFirstLine(600);  
  
  
        XWPFRun r4 = p3.createRun();  
        r4.setTextPosition(20);  
        r4.setText("To be, or not to be: that is the question: "  
                + "Whether 'tis nobler in the mind to suffer "  
                + "The slings and arrows of outrageous fortune, "  
                + "Or to take arms against a sea of troubles, "  
                + "And by opposing end them? To die: to sleep; ");  
        r4.addBreak(BreakType.PAGE);  
        r4.setText("No more; and by a sleep to say we end "  
                + "The heart-ache and the thousand natural shocks "  
                + "That flesh is heir to, 'tis a consummation "  
                + "Devoutly to be wish'd. To die, to sleep; "  
                + "To sleep: perchance to dream: ay, there's the rub; "  
                + ".......");  
        r4.setItalic(true);  
        //This would imply that this break shall be treated as a simple line break, 
        //and break the line after that word:  
  
        XWPFRun r5 = p3.createRun();  
        r5.setTextPosition(-10);  
        r5.setText("For in that sleep of death what dreams may come");  
        r5.addCarriageReturn();  
        r5.setText("When we have shuffled off this mortal coil,"  
                + "Must give us pause: there's the respect"  
                + "That makes calamity of so long life;");  
        r5.addBreak();  
        r5.setText("For who would bear the whips and scorns of time,"  
                + "The oppressor's wrong, the proud man's contumely,");  
  
        r5.addBreak(BreakClear.ALL);  
        r5.setText("The pangs of despised love, the law's delay,"  
                + "The insolence of office and the spurns" + ".......");  
  
        String webRoot = System.getProperty("web.root");
		String uploadPath = webRoot + "static" + File.separator + "upload";
		String wordFileName = "test.docx";
		File wordFile = new File(uploadPath + File.separator + wordFileName);
		if (wordFile.exists()) {
			LOG.info(wordFileName + " had exist, need delete");
			wordFile.delete();
		}
		
        OutputStream out = null;  
        try {  
        	//FileOutputStream fout = new FileOutputStream(uploadPath); 
            response.setContentType("application/force-download");// 设置强制下载不打开  
            response.addHeader("Content-Disposition", "attachment;fileName=" + wordFileName);// 设置文件名  
            out = response.getOutputStream();  
            doc.write(out); 
            //doc.write(fout);
            out.close(); 
            //fout.close();
            doc.close();            
        } catch (Exception e) {  
            e.printStackTrace();  
        }
        LOG.info("wordExample end");
        //model.addAttribute("status", status);
		//return "output/word";
    }  
}
