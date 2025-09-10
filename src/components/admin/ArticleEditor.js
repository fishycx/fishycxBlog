import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ArticleEditor = ({ articles = [], onSave }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    tags: '',
    featured: false,
    publishDate: new Date().toISOString().split('T')[0],
    readTime: '5分钟',
    author: 'fishycx'
  });

  const [previewMode, setPreviewMode] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isEditing && articles.length > 0) {
      const article = articles.find(a => a.id === parseInt(id));
      if (article) {
        setFormData({
          title: article.title,
          excerpt: article.excerpt,
          content: article.content.replace(/<[^>]*>/g, ''), // 简单去除HTML标签
          tags: article.tags ? article.tags.join(', ') : '',
          featured: article.featured,
          publishDate: article.publishDate,
          readTime: article.readTime,
          author: article.author
        });
      }
    }
  }, [id, articles, isEditing]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const articleData = {
        ...formData,
        id: isEditing ? parseInt(id) : Date.now(),
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        content: formData.content
      };

      await onSave(articleData);
      
      alert('文章保存成功！');
      navigate('/admin/articles');
    } catch (error) {
      console.error('保存失败:', error);
      alert('保存失败，请重试');
    } finally {
      setSaving(false);
    }
  };

  const handlePreview = () => {
    setPreviewMode(!previewMode);
  };

  // 简单的Markdown预览转换
  const markdownToHtml = (markdown) => {
    return markdown
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/^\* (.*$)/gim, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(?!<[h|u|l|p])/gm, '<p>')
      .replace(/(?<!>)$/gm, '</p>')
      .replace(/<p><\/p>/g, '')
      .replace(/<p>(<[h|u|l])/g, '$1')
      .replace(/(<\/[h|u|l]>)<\/p>/g, '$1');
  };

  return (
    <div className="article-editor">
      <div className="editor-header">
        <h1>{isEditing ? '编辑文章' : '写新文章'}</h1>
        <div className="editor-actions">
          <button
            onClick={handlePreview}
            className={`btn ${previewMode ? 'btn-primary' : 'btn-secondary'}`}
          >
            {previewMode ? '✏️ 编辑' : '👀 预览'}
          </button>
          <button
            onClick={handleSave}
            disabled={saving || !formData.title || !formData.content}
            className="btn btn-success"
          >
            {saving ? '💾 保存中...' : '💾 保存文章'}
          </button>
        </div>
      </div>

      <div className="editor-content">
        {!previewMode ? (
          <div className="editor-form">
            {/* 基本信息 */}
            <div className="form-section">
              <h3>基本信息</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="title">文章标题 *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="输入文章标题..."
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="excerpt">文章摘要</label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    placeholder="简要描述文章内容..."
                    className="form-textarea"
                    rows="3"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="tags">标签</label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="用逗号分隔多个标签..."
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="readTime">阅读时间</label>
                  <input
                    type="text"
                    id="readTime"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleInputChange}
                    placeholder="如：5分钟"
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="publishDate">发布日期</label>
                  <input
                    type="date"
                    id="publishDate"
                    name="publishDate"
                    value={formData.publishDate}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-text">⭐ 设为推荐文章</span>
                  </label>
                </div>
              </div>
            </div>

            {/* 文章内容 */}
            <div className="form-section">
              <h3>文章内容</h3>
              <div className="editor-toolbar">
                <span className="toolbar-title">Markdown编辑器</span>
                <div className="toolbar-help">
                  <span>支持 **粗体**、*斜体*、`代码`、# 标题等语法</span>
                </div>
              </div>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="在这里编写你的文章内容...

支持Markdown语法：
# 一级标题
## 二级标题
### 三级标题

**粗体文字**
*斜体文字*

`行内代码`

```代码块```

- 列表项1
- 列表项2

[链接文字](URL)"
                className="content-editor"
                rows="20"
              />
            </div>
          </div>
        ) : (
          <div className="preview-section">
            <h3>文章预览</h3>
            <div className="preview-article">
              <header className="preview-header">
                <h1>{formData.title || '未命名文章'}</h1>
                <div className="preview-meta">
                  <span>📅 {formData.publishDate}</span>
                  <span>⏱️ {formData.readTime}</span>
                  <span>👤 {formData.author}</span>
                  {formData.featured && <span>⭐ 推荐</span>}
                </div>
                {formData.excerpt && (
                  <p className="preview-excerpt">{formData.excerpt}</p>
                )}
                {formData.tags && (
                  <div className="preview-tags">
                    {formData.tags.split(',').map(tag => (
                      <span key={tag.trim()} className="tag">{tag.trim()}</span>
                    ))}
                  </div>
                )}
              </header>
              <div 
                className="preview-content"
                dangerouslySetInnerHTML={{ 
                  __html: markdownToHtml(formData.content || '开始编写文章内容...') 
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleEditor;
