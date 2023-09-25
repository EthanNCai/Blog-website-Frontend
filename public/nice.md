| 这个作业属于哪个课程 | [link](https://edu.cnblogs.com/campus/jmu/ComputerScience21)                |
| -------------------- | --------------------------------------------------------------------------- |
| 这个作业要求在哪里   | [link](https://edu.cnblogs.com/campus/jmu/ComputerScience21/homework/13034) |
| 这个作业的目标       | 进行编程练习，练习使用 git                                                  |

## GitHub 仓库地址

[GitHub](https://github.com/EthanNCai?tab=projects)

## 项目需求

> 题目：论文查重
> 描述如下：
> 设计一个论文查重算法，给出一个原文文件和一个在这份原文上经过了增删改的抄袭版论文的文件，在答案文件中输出其重复率。
> 原文示例：今天是星期天，天气晴，今天晚上我要去看电影。
> 抄袭版示例：今天是周天，天气晴朗，我晚上要去看电影。
> 要求输入输出采用文件输入输出，规范如下：
> 从命令行参数给出：论文原文的文件的绝对路径。
> 从命令行参数给出：抄袭版论文的文件的绝对路径。
> 从命令行参数给出：输出的答案文件的绝对路径。
> 我们提供一份样例，课堂上下发，上传到班级群，使用方法是：orig.txt 是原文，其他 orig_add.txt 等均为抄袭版论文。
> 注意：答案文件中输出的答案为浮点型，精确到小数点后两位

## 开发环境

- 操作系统：Windows 11 Education
- 处理器：11th Gen Intel(R) Core(TM) i9-11900K
- 语言：Python
- IDE：PyCharm 2023.2.1

## 计算模块接口的设计与实现过程

对于这道题，我的解决思路是

- 1.对读入的文件进行分词，也就是 NLP 里所谓的 Tokenization

- 2.将两个文件的词频进行计算，形成两个文件对应的词频向量

- 3.比较两个词频向量的空间相似度（这里使用的是余弦公式算法）这里得到的空间相似度就是我们需要的文章查重率

源代码中较为关键的代码块如下

```python
# 建立分词表
def build_frequency_dict(tokens):
    frequency_dict = defaultdict(int)
    for token in tokens:
        frequency_dict[token] += 1
    return frequency_dict

```

```python
# 根据与余弦公式进行计算，这里我使用numpy的linalg参与运算
def calculate_similarity(text1, text2):
    dict1 = build_frequency_dict(text1)
    dict2 = build_frequency_dict(text2)
    aligned_dict1, aligned_dict2 = align_dictionaries(dict1, dict2)
    vector1 = np.array(list(aligned_dict1.values()))
    vector2 = np.array(list(aligned_dict2.values()))
    dot_product = np.dot(vector1, vector2)
    norm1 = np.linalg.norm(vector1)
    norm2 = np.linalg.norm(vector2)
    cosine_similarity = dot_product / (norm1 * norm2)
    return cosine_similarity
```

所有函数如下

```python
get_file_contents(path) # 读取文件
filter_text(string) # 对文件进行初筛，筛掉一些如转义字符等的无关字符，然后使用jieba库进行分词
build_frequency_dict(tokens) # 建立单词的频数字典
align_dictionaries(dict1, dict2) # 生成两个词频数向量
calculate_similarity(text1, text2) # 比较向量相似性
save_float_to_file(float_number, file_path) # 把结果写入文件
```

### Requirements

```
jieba
re
numpy==1.19.5
sys
collections
```

## 计算模块接口部分的性能改进

通过 PyCharm 对 python 脚本的代码性能进行分析，下面展示了（部分）函数调用表和图指向了这个 python 脚本的性能瓶颈在`jieba`这个库中，除此之外消耗量最大的（瓶颈）函数是 calculate_similarity，这里我将 python 的原 list 更换为 numpy 的 list 以及一些方法来重构代码，从而提高性能。

![](https://img2023.cnblogs.com/blog/3215865/202309/3215865-20230920195132968-1452983629.png)
![](https://img2023.cnblogs.com/blog/3215865/202309/3215865-20230920195139570-90552574.png)

## 计算模块部分单元测试展示

### 普通测试

![](https://img2023.cnblogs.com/blog/3215865/202309/3215865-20230920185244552-1663173994.png)

得到
![](https://img2023.cnblogs.com/blog/3215865/202309/3215865-20230920185523181-772160278.png)

### 对于异常的测试覆盖

这里我使用错误的答案文件路径作为参数输入，程序如预期报错
![](https://img2023.cnblogs.com/blog/3215865/202309/3215865-20230920200006426-2077361387.png)

## 计算模块部分异常处理说明

文件读写的异常处理

```python
def get_file_contents(path):
   try:
       with open(path, 'r', encoding='UTF-8') as f:
           return f.read()
   except IOError:
       print(f"Error:文件读取失败，位置： {path}")
       return ""

```

```python
def save_float_to_file(float_number, file_path):
   try:
       with open(file_path, 'w') as file:
           file.write(str(float_number))
   except IOError:
       print(f"Error: 文件写入失败，位置： {file_path}")

```

## PSP 表

| PSP2.1                                  | Personal Software Process Stages        | 预估耗时（分钟） | 实际耗时（分钟） |
| --------------------------------------- | --------------------------------------- | ---------------- | ---------------- |
| Planning                                | 计划                                    | 30               | 20               |
| - Estimate                              | - 估计这个任务需要多少时间              | 80               | 70               |
| Development                             | 开发                                    | 40               | 30               |
| - Analysis                              | - 需求分析 (包括学习新技术)             | 25               | 20               |
| - Design Spec                           | - 生成设计文档                          | 30               | 30               |
| - Design Review                         | - 设计复审                              | 40               | 40               |
| - Coding Standard                       | - 代码规范 (为目前的开发制定合适的规范) | 20               | 2                |
| - Design                                | - 具体设计                              | 20               | 13               |
| - Coding                                | - 具体编码                              | 25               | 14               |
| - Code Review                           | - 代码复审                              | 20               | 18               |
| - Test                                  | - 测试（自我测试，修改代码，提交修改）  | 25               | 22               |
| Reporting                               | 报告                                    | 40               | 53               |
| - Test Report                           | - 测试报告                              | 15               | 12               |
| - Size Measurement                      | - 计算工作量                            | 20               | 2                |
| - Postmortem & Process Improvement Plan | - 事后总结, 并提出过程改进计划          | 20               | 11               |
| 合计                                    |                                         | 555              | 312              |
