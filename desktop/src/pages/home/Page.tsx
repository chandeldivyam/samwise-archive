import { useTranslation } from 'react-i18next'
import LanguageInput from '~/components/LanguageInput'
import Layout from '~/components/Layout'
import ModelOptions from '~/components/Params'
import TextArea from '~/components/TextArea'
import { cx } from '~/lib/utils'
import AudioInput from '~/pages/home/AudioInput'
import AudioPlayer from './AudioPlayer'
import ProgressPanel from './ProgressPanel'
import { viewModel } from './viewModel'
import { useEffect } from 'react'
import * as webviewWindow from '@tauri-apps/api/webviewWindow'
import AudioDeviceInput from '~/components/AudioDeviceInput'
import { ReactComponent as FileIcon } from '~/icons/file.svg'
import { ReactComponent as MicrphoneIcon } from '~/icons/microphone.svg'
import { ReactComponent as DashboardIcon } from '~/icons/file.svg'
import Dashboard from './Dashboard'
import Summary from '~/components/Summary'
import Chat from '~/components/Chat'

export default function Home() {
	const { t } = useTranslation()
	const vm = viewModel()

	async function showWindow() {
		const currentWindow = webviewWindow.getCurrentWebviewWindow()
		await currentWindow.show()
		if (import.meta.env.PROD) {
			await currentWindow.setFocus()
		}
	}

	useEffect(() => {
		showWindow()
	}, [])

	return (
		<Layout>
			<div role="tablist" className="tabs tabs-lifted flex m-auto mt-5">
				<a role="tab" onClick={() => vm.setTabIndex(0)} className={cx('tab [--tab-border-color:gray]', vm.tabIndex === 0 && 'tab-active')}>
					<FileIcon className="w-[18px] h-[18px]" />
				</a>
				<a role="tab" onClick={() => vm.setTabIndex(1)} className={cx('tab [--tab-border-color:gray]', vm.tabIndex === 1 && 'tab-active')}>
					<MicrphoneIcon className="w-[18px] h-[18px]" />
				</a>
				<a role="tab" onClick={() => vm.setTabIndex(2)} className={cx('tab [--tab-border-color:gray]', vm.tabIndex === 2 && 'tab-active')}>
					<DashboardIcon className="w-[18px] h-[18px]" />
				</a>
			</div>
			{vm.tabIndex === 0 && (
				<>
					<div className="flex w-[300px] flex-col m-auto">
						<div className="join join-vertical">
							<LanguageInput />
							{!vm.files.length && !vm.isRecording && <AudioInput onClick={vm.selectFiles} />}
						</div>
						{vm.audio && (
							<div>
								{vm.files.length ? (
									<AudioPlayer label={vm?.files?.[0].name} onLabelClick={() => vm.openPath(vm?.files?.[0])} audio={vm.audio} />
								) : null}

								{!vm.loading && !vm.isRecording && (
									<div onMouseDown={vm.selectFiles} className={cx('text-xs text-base-content font-medium cursor-pointer mb-3 mt-1')}>
										{t('common.change-file')}
									</div>
								)}
							</div>
						)}
						{vm.audio && !vm.loading && (
							<>
								<button onMouseDown={vm.transcribe} className="btn btn-primary mt-3">
									{t('common.transcribe')}
								</button>
								<ModelOptions options={vm.preference.modelOptions} setOptions={vm.preference.setModelOptions} />
							</>
						)}
					</div>
					<div className="h-20" />
					{vm.loading && <ProgressPanel isAborting={vm.isAborting} onAbort={vm.onAbort} progress={vm.progress} />}
					{(vm.segments || vm.loading) && (
						<div className="flex flex-col mt-5 items-center w-[90%] max-w-[1000px] h-[84vh] m-auto">
							<div className="tabs tabs-boxed mb-4">
							<a 
								className={`tab ${vm.activeTab === 'transcript' ? 'tab-active' : ''}`}
								onClick={() => vm.setActiveTab('transcript')}
							>
								{t('common.transcript')}
							</a>
							<a 
								className={`tab ${vm.activeTab === 'summary' ? 'tab-active' : ''}`}
								onClick={() => vm.setActiveTab('summary')}
							>
								{t('common.summary')}
							</a>
							<a 
								className={`tab ${vm.activeTab === 'chat' ? 'tab-active' : ''}`}
								onClick={() => vm.setActiveTab('chat')}
								>
								{t('common.chat')}
							</a>
							</div>
							{vm.activeTab === 'transcript' && (
							<TextArea
								setSegments={vm.setSegments}
								file={vm.files?.[0]}
								placeholder={t('common.transcript-will-displayed-shortly')}
								segments={vm.segments}
								readonly={vm.loading}
							/>
							)}
							{vm.activeTab === 'summary' && (
								<Summary 
									summary={vm.summary} 
									loading={vm.loading} 
									setSummary={vm.setSummary} 
									segments={vm.segments}
								/>
							)}
							{vm.activeTab === 'chat' && (
								<Chat 
									segments={vm.segments} 
									messages={vm.messages}
									setMessages={vm.setMessages}
								/>
							)}
						</div>
					)}
				</>
			)}

			{vm.tabIndex === 1 && (
				<>
					<div className="flex w-[300px] flex-col m-auto">
						<div className="">
							<AudioDeviceInput device={vm.inputDevice} setDevice={vm.setInputDevice} devices={vm.devices} type="input" />
							<AudioDeviceInput device={vm.outputDevice} setDevice={vm.setOutputDevice} devices={vm.devices} type="output" />
							{/* <label className="label cursor-pointer mt-2 mb-5">
								<span className="label-text">{t('common.save-record-in-documents-folder')}</span>
								<input
									type="checkbox"
									className="toggle toggle-primary"
									onChange={(e) => vm.preference.setStoreRecordInDocuments(e.target.checked)}
									checked={vm.preference.storeRecordInDocuments}
								/>
							</label> */}
						</div>
						{!vm.isRecording && (
							<button onMouseDown={() => vm.startRecord()} className="btn btn-primary mt-3">
								{t('common.start-record')}
							</button>
						)}

						{vm.isRecording && (
							<>
								<button onMouseDown={vm.stopRecord} className="btn relative btn-success mt-3">
									<span className="loading loading-spinner"></span>
									{t('common.stop-and-transcribe')}
								</button>
							</>
						)}
					</div>
				</>
			)}

			{vm.tabIndex === 2 && (
				<Dashboard 
					onRecordingClick={vm.handleRecordingClick}
					onRenameRecording={vm.renameRecording}
				/>
			)}
		</Layout>
	)
}
