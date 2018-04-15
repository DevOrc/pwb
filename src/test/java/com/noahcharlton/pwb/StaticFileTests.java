package com.noahcharlton.pwb;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class StaticFileTests {

	@Autowired
	private MockMvc mvc;
	
	@Test
	public void staticJS() throws Exception {
		verifyStaticFile("/scripts/home.js");
	}

	@Test
	public void staticCSS() throws Exception {
		verifyStaticFile("/css/style.css");
	}

	@Test
	public void staticIndex() throws Exception {
		verifyStaticFile("/index.html");
	}

	private void verifyStaticFile(String path) throws Exception {
		mvc.perform(MockMvcRequestBuilders.get(path).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}
	
	
}
