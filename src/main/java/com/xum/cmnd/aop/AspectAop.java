package com.xum.cmnd.aop;

import java.util.Arrays;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Aspect
@Order(1)
@Component
public class AspectAop {

	private static final Logger LOG = LogManager.getLogger(AspectAop.class);
	
	/**
     * 定义一个方法，用于声明切入点表达式，方法中一般不需要添加其他代码
     * 使用@Pointcut声明切入点表达式
     * 后面的通知直接使用方法名来引用当前的切点表达式；如果是其他类使用，加上包名即可
     */
    @Pointcut("execution(public * com.xum.cmnd.controller.*Controller.*(..))")
    public void declearJoinPointExpression() {
    	
    }
	
	/**
	 * before 前置通知
	 * 
	 * @param joinPoint
	 */
    //该标签声明次方法是一个前置通知：在目标方法开始之前执行
    @Before("declearJoinPointExpression()") 
	public void beforeMethod(JoinPoint joinPoint) {
		String methodName = joinPoint.getSignature().getName();
		List<Object> args = Arrays.asList(joinPoint.getArgs());
		LOG.info("beforeMethod=>this method=>" + methodName + " begin. param<" + args + ">");
	}

	/**
	 * after 后置通知(无论方法是否发生异常都会执行, 所以访问不到方法的返回值)
	 * 
	 * @param joinPoint
	 */
    @After("declearJoinPointExpression()")
	public void afterMethod(JoinPoint joinPoint) {
		String methodName = joinPoint.getSignature().getName();
		LOG.info("afterMethod=>this method=>" + methodName);
	}

	/**
	 * after-returning 返回通知(在方法正常结束执行的代码) 返回通知可以访问到方法的返回值!
	 * 
	 * @param joinPoint
	 */
    @AfterReturning(value="declearJoinPointExpression()", returning="result")
	public void afterReturnMethod(JoinPoint joinPoint, Object result) {
		String methodName = joinPoint.getSignature().getName();
		LOG.info("afterReturnMethod=>this method=>" + methodName + " end.result<" + result + ">");
	}

	/**
	 * after-throwing 异常通知(方法发生异常执行的代码) 可以访问到异常对象;且可以指定在出现特定异常时执行的代码
	 * 
	 * @param joinPoint
	 * @param ex
	 */
    @AfterThrowing(value="declearJoinPointExpression()", throwing="ex")
	public void afterThrowingMethod(JoinPoint joinPoint, Exception ex) {
		String methodName = joinPoint.getSignature().getName();
		LOG.info("afterThrowingMethod=>this method=>" + methodName + " end.ex message<" + ex + ">");
	}

	/**
	 * around 环绕通知(需要携带类型为ProceedingJoinPoint类型的参数)
	 * 环绕通知包含前置、后置、返回、异常通知;ProceedingJoinPoin 类型的参数可以决定是否执行目标方法
	 * 且环绕通知必须有返回值,返回值即目标方法的返回值
	 * 
	 * @param point
	 */
    @Around(value="declearJoinPointExpression()")
	public Object aroundMethod(ProceedingJoinPoint point) {
		Object result = null;
		String methodName = point.getSignature().getName();
		try {
			// 前置通知
			LOG.info("aroundMethod=>the method=>" + methodName + " start. param<" + Arrays.asList(point.getArgs())
					+ ">");
			// 执行目标方法
			result = point.proceed();
			// 返回通知
			LOG.info("aroundMethod=>the method=>" + methodName + " end. result<" + result + ">");
		} catch (Throwable e) {
			// 异常通知
			LOG.info("aroundMethod=>this method=>" + methodName + " end.ex message<" + e + ">");
			throw new RuntimeException(e);
		}
		// 后置通知
		LOG.info("aroundMethod=>the method=>" + methodName + " end.");
		return result;
	}
	
}
