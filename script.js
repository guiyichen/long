// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加页面加载动画
    addLoadingAnimation();
    
    // 初始化卡片动画
    initCardAnimations();
    
    // 添加滚动效果
    addScrollEffects();
});

// 添加加载动画
function addLoadingAnimation() {
    const cards = document.querySelectorAll('.function-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// 初始化卡片动画
function initCardAnimations() {
    const cards = document.querySelectorAll('.function-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// 添加滚动效果
function addScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    const elements = document.querySelectorAll('.function-card');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// 打开注册页面
function openRegister() {
    // 直接跳转到外部注册页面
    window.open('https://sqsdjx.giqwm.com/?p=10328', '_blank');
}

// 打开下载页面
function openDownload() {
    // 直接跳转到外部下载页面
    console.log('Opening download page...');
    window.open('https://app.pgy.im/RfKG', '_blank');
}

// 打开充值中心
function openRecharge() {
    // 直接跳转到外部充值页面
    window.open('https://sqsdjx.giqwm.com/player/index', '_blank');
}

// 打开福利中心
function openWelfare() {
    // 直接跳转到外部福利页面
    window.open('https://sqsdjx.giqwm.com/index/gift?p=novice', '_blank');
}

// 显示模态框
function showModal(title, content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `<h2>${title}</h2>${content}`;
    modal.style.display = 'block';
    
    // 添加模态框样式
    const style = document.createElement('style');
    style.textContent = `
        .register-form, .download-section, .recharge-section, .welfare-section {
            padding: 20px 0;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: 500;
        }
        
        .form-group input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        
        .download-options {
            display: flex;
            gap: 20px;
            margin-top: 20px;
        }
        
        .download-option {
            flex: 1;
            text-align: center;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
        }
        
        .platform-icon {
            font-size: 2rem;
            margin-bottom: 10px;
        }
        
        .recharge-options {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin: 20px 0;
        }
        
        .recharge-option {
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .recharge-option:hover {
            border-color: #3498db;
            background: #f8f9fa;
        }
        
        .recharge-option.selected {
            border-color: #3498db;
            background: #e3f2fd;
        }
        
        .amount {
            font-size: 1.5rem;
            font-weight: bold;
            color: #e74c3c;
        }
        
        .bonus {
            color: #27ae60;
            font-size: 0.9rem;
        }
        
        .payment-methods {
            margin-top: 20px;
        }
        
        .payment-options {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }
        
        .payment-btn {
            flex: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background: white;
            cursor: pointer;
        }
        
        .payment-btn.selected {
            border-color: #3498db;
            background: #e3f2fd;
        }
        
        .welfare-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 10px;
            margin-bottom: 10px;
        }
        
        .welfare-info h4 {
            margin-bottom: 5px;
        }
        
        .welfare-info p {
            color: #666;
            font-size: 0.9rem;
        }
    `;
    
    if (!document.querySelector('#modal-styles')) {
        style.id = 'modal-styles';
        document.head.appendChild(style);
    }
}

// 关闭模态框
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// 复制QQ群号
function copyQQGroup() {
    const qqNumber = '1049395907';
    navigator.clipboard.writeText(qqNumber).then(() => {
        showNotification('QQ群号已复制到剪贴板！');
    }).catch(() => {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = qqNumber;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('QQ群号已复制到剪贴板！');
    });
}

// 打开CDK领取页面
function openCDKClaim() {
    window.open('https://sqsdjx.giqwm.com/index/cdk', '_blank');
}

// 处理注册表单
function handleRegister(e) {
    // 跳转到外部注册页面
    window.open('https://sqsdjx.giqwm.com/?p=10328', '_blank');
}

// 下载游戏
function downloadGame(platform) {
    // 直接跳转到外部下载页面
    window.open('https://app.pgy.im/RfKG', '_blank');
}

// 选择充值金额
function selectAmount(amount) {
    // 跳转到外部充值页面
    window.open('https://sqsdjx.giqwm.com/player/index', '_blank');
}

// 选择支付方式
function selectPayment(method) {
    // 跳转到外部充值页面
    window.open('https://sqsdjx.giqwm.com/player/index', '_blank');
}

// 领取福利
function claimWelfare(type) {
    // 跳转到外部福利页面
    window.open('https://sqsdjx.giqwm.com/index/gift?p=novice', '_blank');
}

// 查看版本详情
function viewVersion() {
    showNotification('正在加载版本详情...');
    closeModal();
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    // 根据类型设置背景色
    const colors = {
        'success': '#27ae60',
        'error': '#e74c3c',
        'info': '#3498db'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // 添加动画样式
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}
