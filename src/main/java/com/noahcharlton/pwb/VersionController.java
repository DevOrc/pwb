package com.noahcharlton.pwb;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class VersionController {

    @GetMapping("/api/get/version")
    @ResponseBody
    public String getVersion() {
        return Application.VERSION;
    }


}
