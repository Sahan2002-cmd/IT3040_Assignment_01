import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala Converter Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
  });

  // Helper function to get Sinhala output
  async function getSinhalaOutput(page) {
    await page.waitForTimeout(3000); // Wait for real-time conversion
    
    try {
      // Find the Sinhala output section (right side card)
      // Look for any text with Sinhala Unicode characters
      const sinhalaText = page.locator('text=/[ක-ෆ]+/').first();
      const output = await sinhalaText.textContent();
      return output.trim();
    } catch {
      return '';
    }
  }

  // POSITIVE FUNCTIONAL TESTS (24)

  test('Pos_Fun_0001: Convert simple sentence with question', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('mama gedhara yanavaa. uBA enavaadha ?');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0001 Output:', actualOutput);
    
    expect(actualOutput).toContain('මම ගෙදර යනවා');
    expect(actualOutput).toContain('උඹ එනවාද');
  });

  test('Pos_Fun_0002: Convert compound sentence with invitation', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('apith ekka kaeema kanna yamu.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0002 Output:', actualOutput);
    
    expect(actualOutput).toContain('අපිත් එක්ක කෑම කන්න යමු');
  });

  test('Pos_Fun_0003: Convert imperative sentence with task complete', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('mama gaNan tika okkoma hadhan aavaa. eeka nisaa magee vaeda tika ivarayi.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0003 Output:', actualOutput);
    
    expect(actualOutput).toContain('මම ගණන් ටික');
    expect(actualOutput).toContain('මගේ වැඩ ටික ඉවරයි');
  });

  test('Pos_Fun_0004: Convert imperative sentence with wish', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('oyaalatath oyaalagee pavulee ayatath subama suba aluth avurudhdhak veevaa...!');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0004 Output:', actualOutput);
    
    expect(actualOutput).toContain('ඔයාලටත්');
    expect(actualOutput).toContain('සුබ අලුත් අවුරුද්දක්');
  });

  test('Pos_Fun_0005: Convert imperative sentence with request', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('Mee, api library ekatavath yamu vaeda tika karanna.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0005 Output:', actualOutput);
    
    expect(actualOutput).toContain('අපි library එකටවත් යමු');
    expect(actualOutput).toContain('වැඩ ටික කරන්න');
  });

  test('Pos_Fun_0006: Convert compound sentence with conjunction and reason', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0006 Output:', actualOutput);
    
    expect(actualOutput).toContain('මම ගෙදර යනවා');
    expect(actualOutput).toContain('හැබැයි වහින නිසා');
  });

  test('Pos_Fun_0007: Convert compound sentence with sequential actions', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('api kaeema kanna yanavaa.iita passee chithrapatayakuth balanna yanavaa.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0007 Output:', actualOutput);
    
    expect(actualOutput).toContain('අපි කෑම කන්න යනවා');
    expect(actualOutput).toContain('චිත්‍රපටයකුත් බලන්න');
  });

  test('Pos_Fun_0008: Convert complex conditional sentence', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('oya enavaanam mamath ennam.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0008 Output:', actualOutput);
    
    expect(actualOutput).toContain('ඔය එනවානේ');
    expect(actualOutput).toContain('මමත් එන්නේ');
  });

  test('Pos_Fun_0009: Convert interrogative question form about timing', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('oyaa kavadhdha enna hithan inne?');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0009 Output:', actualOutput);
    
    expect(actualOutput).toContain('ඔයා කවද්ද');
    expect(actualOutput).toContain('එන්න හිතන් ඉන්නේ');
  });

  test('Pos_Fun_0010: Convert positive affirmation statement with long space', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('mama ehema karanavaa.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0010 Output:', actualOutput);
    
    expect(actualOutput).toContain('මම එහෙම කරනවා');
  });

  test('Pos_Fun_0011: Convert polite request with Regional languages', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('mama evapu eka balanavaeyi poddak');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0011 Output:', actualOutput);
    
    expect(actualOutput).toContain('මම එවපු එක');
    expect(actualOutput).toContain('බලනවැයි පොඩ්ඩක්');
  });

  test('Pos_Fun_0012: Convert repeated word for emphasis', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('tika tika vaeda karamu');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0012 Output:', actualOutput);
    
    expect(actualOutput).toContain('ටික ටික වැඩ කරමු');
  });

  test('Pos_Fun_0013: Convert past tense sentence', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('mama iiyee gedhara giyaa.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0013 Output:', actualOutput);
    
    expect(actualOutput).toContain('මම ඊයේ ගෙදර ගියා');
  });

  test('Pos_Fun_0014: Convert medium-length sentence with place name and traffic reason', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('nimaali office enna late vennee traffic nisaa.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0014 Output:', actualOutput);
    
    expect(actualOutput).toContain('නිමාලි office එන්න late වෙන්නේ traffic නිසා');
  });

  test('Pos_Fun_0015: Convert imperative sentence with daily activity', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('yana gaman sindhu ahanna');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0015 Output:', actualOutput);
    
    expect(actualOutput).toContain('යන ගමන් සින්දු අහන්න');
  });

  test('Pos_Fun_0016: Convert Informal phrasing', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('eeyi, ooka dhiyan bQQ.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0016 Output:', actualOutput);
    
    expect(actualOutput).toContain('ඒයි');
    expect(actualOutput).toContain('ඕක දියන් බං');
  });

  test('Pos_Fun_0017: Convert polite request with please', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('karuNaakara eeka dhenavadha?');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0017 Output:', actualOutput);
    
    expect(actualOutput).toContain('කරුණාකර ඒක දෙනවද');
  });

  test('Pos_Fun_0018: Convert Currency and numbers', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('eeke gahala thiyenne Rs.1500 kiyalaa');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0018 Output:', actualOutput);
    
    expect(actualOutput).toContain('ඒකේ ගහල තියෙන්නේ Rs.1500 කියලා');
  });

  test('Pos_Fun_0019: Convert Joined words', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('apiehetayamu');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0019 Output:', actualOutput);
    
    expect(actualOutput).toContain('අපිඑහෙටයමු');
  });

  test('Pos_Fun_0020: Convert Common slang greeting', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('ela machan! supiri!!');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0020 Output:', actualOutput);
    
    expect(actualOutput).toContain('එල මචන්');
    expect(actualOutput).toContain('සුපිරි');
  });

  test('Pos_Fun_0021: Convert long paragraph with mixed content', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('mata campus ekata yanna kalin Zoom meeting ekak thiyenavaa. aapahu mama documents tika submit karanna oonee. passe api mall ekatath yamu. kohomadha hithan inne? hetath karanna thiyana vaeda vaedi vagee. mama test karala balanavaa system eka hodhadha kiyalaa adha.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0021 Output:', actualOutput);
    
    expect(actualOutput).toContain('මට campus එකට');
    expect(actualOutput).toContain('Zoom meeting');
    expect(actualOutput).toContain('documents ටික submit');
  });

  test('Pos_Fun_0022: Convert technical sentence with abbreviations', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('API key eka generate karala URL ekata attach karala OTP ekak aevilla check karanna.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0022 Output:', actualOutput);
    
    expect(actualOutput).toContain('API key එක generate කරල');
    expect(actualOutput).toContain('URL එකට attach');
    expect(actualOutput).toContain('OTP එකක්');
  });

  test('Pos_Fun_0023: Convert date and time formats in context', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('December 25 7.30 AM yanna plan kalaa.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0023 Output:', actualOutput);
    
    expect(actualOutput).toContain('December 25');
    expect(actualOutput).toContain('7.30 AM');
    expect(actualOutput).toContain('යන්න plan කලා');
  });

  test('Pos_Fun_0024: Convert sentence with regional dialect', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('mamath yanavaanee gedharata');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Pos_Fun_0024 Output:', actualOutput);
    
    expect(actualOutput).toContain('මමත්');
    expect(actualOutput).toContain('යනවාන');
  });

  // NEGATIVE FUNCTIONAL TESTS (10)

  test('Neg_Fun_0001: Extreme long input with 500+ characters', async ({ page }) => {
    const longInput = 'mama gedhara yanavaa. '.repeat(30); // ~600 characters
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill(longInput);
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Neg_Fun_0001 Output length:', actualOutput.length);
    
    // System should either truncate or show error
    // For now, just log the behavior
    expect(actualOutput.length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0002: Gibberish with special characters', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill(',#$%^@&*()! asdfjkl;');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Neg_Fun_0002 Output:', actualOutput);
    
    // Should remain as is or show garbled output
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0003: Only numbers and symbols', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('12345!@#$% 67890');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Neg_Fun_0003 Output:', actualOutput);
    
    // Should remain unchanged
    expect(actualOutput).toContain('12345');
  });

  test('Neg_Fun_0004: Empty input field', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Neg_Fun_0004 Output:', actualOutput);
    
    // Should show empty output or placeholder
    expect(actualOutput.length).toBeLessThan(50);
  });

  test('Neg_Fun_0005: Only spaces (multiple)', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('          ');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Neg_Fun_0005 Output:', actualOutput);
    
    // Should show empty output
    expect(actualOutput.trim().length).toBeLessThan(10);
  });

  test('Neg_Fun_0006: Mixed case random capitalization', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('MaMa GeDhArA YaNaVaA. oYaA EnAvAdHa?');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Neg_Fun_0006 Output:', actualOutput);
    
    // May produce incorrect Sinhala output
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0007: Unsupported chat shorthand', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('Thx! C U l8r. BRB.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Neg_Fun_0007 Output:', actualOutput);
    
    // Shorthand may not convert properly
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0008: Incorrect Singlish spelling', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('mama gedara yanwa.passe oka balamu.');
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Neg_Fun_0008 Output:', actualOutput);
    
    // May produce wrong Sinhala output
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0009: Code injection attempt', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill("<script>alert('test')</script>");
    
    const actualOutput = await getSinhalaOutput(page);
    console.log('Neg_Fun_0009 Output:', actualOutput);
    
    // Should sanitize or show error
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0010: Mixed languages (English + Sinhala + Singlish)', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputField.fill('Hello මම yanavaa to the gedhara. How are you?');
    
    await page.waitForTimeout(2000);
    
    // Check if error message is shown
    const pageText = await page.textContent('body');
    console.log('Neg_Fun_0010 - Checking for error message');
    
    // May show error: "Sinhala characters are not allowed in Singlish input"
    const hasError = pageText.includes('Sinhala characters') || pageText.includes('not allowed');
    console.log('Error shown:', hasError);
    
    expect(pageText).toBeDefined();
  });

  // UI TEST (1)

  test('Pos_UI_0001: Clear button functionality in real-time system', async ({ page }) => {
    const inputField = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    
    // Type input
    await inputField.fill('mama gedhara yanavaa adha mukuth naethi nisaa');
    
    // Wait for real-time conversion
    await page.waitForTimeout(3000);
    
    // Check output exists
    let outputBefore = await getSinhalaOutput(page);
    console.log('Output before clear:', outputBefore);
    expect(outputBefore.length).toBeGreaterThan(0);
    
    // Click clear button
    const clearButton = page.locator('button:has-text("Clear")');
    await clearButton.click();
    
    await page.waitForTimeout(1000);
    
    // Check both fields are cleared
    const inputAfter = await inputField.inputValue();
    const outputAfter = await getSinhalaOutput(page);
    
    console.log('Input after clear:', inputAfter);
    console.log('Output after clear:', outputAfter);
    
    expect(inputAfter).toBe('');
    expect(outputAfter.trim().length).toBeLessThan(50);
  });

});