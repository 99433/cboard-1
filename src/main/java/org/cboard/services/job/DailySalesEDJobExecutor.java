package org.cboard.services.job;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import org.cboard.util.SendEmail;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.BeansException;
/**
 * （停用）
 * @author EBD403
 *
 */
public class DailySalesEDJobExecutor implements Job {

	@Override
	public void execute(JobExecutionContext arg0) throws JobExecutionException {		
//		try {
//			InputStream is = new FileInputStream(new File(DailySalesEDJobExecutor.class.getResource("/").getPath()+"template/","B2C每日销售报表-管理层-ED.xls"));
//			String mailArray = "Renyi.Xu@mo-co.com,Nicole.Zhong@mo-co.com,Yuge.Ding@mo-co.com,Renjie.Li@mo-co.com,Huasheng.Wu@mo-co.com,Sia.Yan@mo-co.com,haizhu.jiang@mo-co.com,Tina.Guan@mo-co.com,ava.liang@mo-co.com";
//        	//SendEmail.sendMail("B2C每日销售报表-管理层-ED", mailArray, "EPO E-COMMERCE Daily Report", is,"B2C每日销售报表-管理层-ED.xls");
//        	//SendEmail.sendMail("B2C每日销售报表-管理层-ED", "lu.a.wang@mo-co.com", "EPO E-COMMERCE Daily Report", is,"B2C每日销售报表-管理层-ED.xls");
//		} catch (BeansException e) {		
//			e.printStackTrace();
//		} catch (FileNotFoundException e) {
//			e.printStackTrace();
//		}
	}

}
