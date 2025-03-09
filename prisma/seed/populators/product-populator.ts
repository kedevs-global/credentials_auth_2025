/**
 *
 * ## example population data (product)
 *
 


import * as ExcelJS from 'exceljs';
import path from 'path';
import { db } from '../../db';

export async function productPopulator(filePath: string) {
  try {
    const worksheet = await getFirstWorksheet(filePath);
    const worksheetRowList = worksheet.getRows(2, worksheet.rowCount - 1) || [];

    for (const row of worksheetRowList) {
      const rowData = row.values as string[];
      const {
        excelCorrelativeCode,
        excelProductName,
        excelPrice,
        excelMinimumStock,
        excelInitialStock,
        excelCategory,
        excelUnitMeasure,
        excelProductIsActive,
      } = await getExcelData(rowData);

      if (!excelCorrelativeCode || !excelProductName) continue;

      const existingProduct = await db.product.findUnique({
        where: { correlativeCode: excelCorrelativeCode },
      });
      if (existingProduct) continue;

      const categoryId = await getOrCreateCategoryId(excelCategory);
      const unitMeasureId = await getOrCreateUnitMeasureId(excelUnitMeasure);

      const excelProduct = {
        correlativeCode: excelCorrelativeCode,
        name: excelProductName,
        price: excelPrice ?? 0,
        minimumStock: excelMinimumStock ?? 0,
        stock: excelInitialStock ?? 0,
        initialStock: excelInitialStock ?? 0,
        isActive: excelProductIsActive,
        categoryId,
        unitMeasureId,
      };

      await db.product.create({
        data: excelProduct,
      });

      console.log(
        `Created new product: ${excelProductName} (Correlative Code: ${excelCorrelativeCode})`
      );
    }
  } catch (error) {
    console.error('Failed to populate products:', error);
  }
}

async function getFirstWorksheet(filePath: string) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  return workbook.worksheets[0];
}

async function getExcelData(rowData: string[]) {
  const excelCorrelativeCode = String(rowData[1]);
  const excelProductName = rowData[2]?.toString().trim();
  const excelPrice = parseFloat(rowData[3]) ?? 0;
  const excelMinimumStock = parseFloat(rowData[4]) ?? 0;
  const excelInitialStock = parseFloat(rowData[5]) ?? 0;
  const excelCategory = rowData[6]?.toString().trim();
  const excelUnitMeasure = rowData[7]?.toString().trim();
  const excelProductIsActive = rowData[8]?.toString().trim() === 'ACTIVO';

  return {
    excelCorrelativeCode,
    excelProductName,
    excelPrice,
    excelMinimumStock,
    excelInitialStock,
    excelCategory,
    excelUnitMeasure,
    excelProductIsActive,
  };
}

async function getOrCreateCategoryId(excelCategory: string) {
  const existingCategory = await db.category.findFirst({
    where: { name: excelCategory },
  });

  if (existingCategory) return existingCategory.id;

  const categoryId = (
    await db.category.create({
      data: {
        name: excelCategory,
        isActive: true,
      },
    })
  ).id;

  return categoryId;
}

async function getOrCreateUnitMeasureId(excelUnitMeasure: string) {
  const existingUnitMeasure = await db.unitMeasure.findFirst({
    where: { name: excelUnitMeasure },
  });

  if (existingUnitMeasure) return existingUnitMeasure.id;

  const unitMeasureId = (
    await db.unitMeasure.create({
      data: {
        name: excelUnitMeasure,
        abbreviation: excelUnitMeasure,
        isActive: true,
      },
    })
  ).id;

  return unitMeasureId;
}

export const productFilePath = path.resolve(
  __dirname,
  '../data/product-data.xlsx'
);

**/
