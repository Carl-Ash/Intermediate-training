package com.group38.oj.model.dto.question;

import lombok.Data;

/*
 * 题目用例
 */
@Data
public class JudgeCase {
    /*
     * 用例输入
     */
    private String input;
    /*
     * 用例输出
     */
    private String output;
}
