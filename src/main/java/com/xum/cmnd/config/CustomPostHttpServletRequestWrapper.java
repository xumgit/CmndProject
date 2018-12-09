package com.xum.cmnd.config;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.servlet.ReadListener;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class CustomPostHttpServletRequestWrapper extends HttpServletRequestWrapper {
    private final Logger LOG = LogManager.getLogger(CustomPostHttpServletRequestWrapper.class);
    private byte[] body;
    private ServletInputStream inputStream;
    public CustomPostHttpServletRequestWrapper(HttpServletRequest request) {
        super(request);
        try {
            this.inputStream = request.getInputStream();
            byte[] bytes = new byte[1024];
            int index = 0;
            StringBuffer sb = new StringBuffer();
            while(( index = inputStream.read(bytes, 0, bytes.length)) > 0) {
                sb.append(new String(bytes, 0, index, "utf-8"));
            }
            body = sb.toString().getBytes();
        } catch (Exception e) {
            LOG.error("parse requestbody exception", e);
            body =  new byte[0];
            this.inputStream = null;
        }
    }

    @Override
    public ServletInputStream getInputStream() throws IOException {
        if (inputStream == null)
            return super.getInputStream();
        //作为缓存存储request中的内容。
        final ByteArrayInputStream bais = new ByteArrayInputStream(body);

        return new ServletInputStream() {
            @Override
            public boolean isFinished() {
                return false;
            }

            @Override
            public boolean isReady() {
                return false;
            }

            @Override
            public int read() throws IOException {
                return bais.read();
            }

			@Override
			public void setReadListener(ReadListener listener) {
				// TODO Auto-generated method stub
				
			}
        };
    }

    @Override
    public BufferedReader getReader() throws IOException {
        return new BufferedReader(new InputStreamReader(getInputStream()));
    }
}
