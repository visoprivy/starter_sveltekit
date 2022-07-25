import { IsString } from 'class-validator';

export class TestModel {
	@IsString()
	testData = '1';
}
