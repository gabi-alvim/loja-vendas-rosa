const { test, expect } = require('@playwright/test')
import React, { useState } from 'react';


//const  { createUser , getProductBody }  =  require ( '../../lib/helpers' )
test.describe('Create product', () => {
  test.beforeEach(async ({ page }) => {
      await page.goto('/')
  })
  test('Confirmar se produto está sendo inserido no carrinho', async ({ page }) => {
    await expect(page.locator('.carrinhoVazio')).toBeVisible()
    await page.locator('data-testid=btn-blusa').click()
    await expect(page.locator('.Carrinho')).toBeVisible('data-testid=btn-blusa')
    await page.locator('data-testid=btn-remove-blusa').click()
  })
  test('Confirmar', async ({ page }) => {
    await expect(page.locator('.carrinhoVazio')).toBeVisible()
   
  //  for(let i = 1; i < 5; i++) {
    await page.locator('data-testid=btn-calça').click()
    await expect(page.locator('.Carrinho')).toBeVisible('data-testid=btn-remove-calça')}
  )
})