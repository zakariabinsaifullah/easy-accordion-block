/* eslint-disable @wordpress/no-unsafe-wp-apis */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ColorPalette,
	TextControl,
	ToggleControl,
	__experimentalBorderControl as BorderControl,
	RangeControl,
	TabPanel,
	ToolbarGroup,
	SelectControl,
	ToolbarButton,
} from '@wordpress/components';

const { Fragment } = wp.element;

// import icons
import icons from './icons';

/**
 * Block Registration
 */
registerBlockType('esab/accordion-child', {
	title: __('Accordion', 'easy-accordion-block'),
	description: __(
		'Acts as Child Block for Easy Accordion Block',
		'easy-accordion-block'
	),
	usesContext: [
		'esab/accordionBorderWidth',
		'esab/accordionBorderColor',
		'esab/accordionBorderStyle',
		'esab/headingTag',
		'esab/collapsedIcon',
		'esab/expandedIcon',
		'esab/iconPosition',
		'esab/headerSeparator',
		'esab/headerSeparatorColor',
		'esab/headerSeparatorHeight',
		'esab/headerSeparatorStyle',
		'esab/headerTopPadding',
		'esab/headerBottomPadding',
		'esab/headerLeftPadding',
		'esab/headerRightPadding',
	],
	icon: {
		src: (
			<svg width="24" height="24">
				<g>
					<rect
						stroke="#3fa796"
						id="svg_1"
						height="6.16667"
						width="21.5"
						y="8.91667"
						x="1.25"
						fill="#fff"
					/>
				</g>
			</svg>
		),
	},
	supports: {
		html: false,
		anchor: false,
		customClassName: false,
	},
	category: 'esab-blocks',
	parent: ['esab/accordion'],
	attributes: {
		active: {
			type: 'boolean',
			default: false,
		},
		accordionBorderWidth: {
			type: 'number',
			default: 1,
		},
		accordionBorderColor: {
			type: 'string',
			default: '#E0E0E0',
		},
		accordionBorderStyle: {
			type: 'string',
			default: 'solid',
		},
		heading: {
			type: 'string',
		},
		headingTag: {
			type: 'string',
		},
		collapsedIcon: {
			type: 'string',
		},
		expandedIcon: {
			type: 'string',
		},
		iconPosition: {
			type: 'boolean',
			default: false,
		},
		headerSeparator: {
			type: 'boolean',
			default: false,
		},
		headerSeparatorColor: {
			type: 'string',
			default: '#E0E0E0',
		},
		headerSeparatorHeight: {
			type: 'number',
			default: 1,
		},
		headerSeparatorStyle: {
			type: 'string',
			default: 'solid',
		},
		headerTopPadding: {
			type: 'number',
			default: 10,
		},
		headerBottomPadding: {
			type: 'number',
			default: 10,
		},
		headerLeftPadding: {
			type: 'number',
			default: 10,
		},
		headerRightPadding: {
			type: 'number',
			default: 10,
		},
	},
	edit: ({ attributes, setAttributes, context, className }) => {
		const {
			active,
			accordionBorderWidth,
			accordionBorderColor,
			accordionBorderStyle,
			heading,
			headingTag,
			iconPosition,
			collapsedIcon,
			expandedIcon,
			headerSeparator,
			headerSeparatorColor,
			headerSeparatorHeight,
			headerSeparatorStyle,
			headerTopPadding,
			headerBottomPadding,
			headerLeftPadding,
			headerRightPadding,
		} = attributes;

		// set context values to attributes
		setAttributes({
			accordionBorderWidth: context['esab/accordionBorderWidth'],
			accordionBorderColor: context['esab/accordionBorderColor'],
			accordionBorderStyle: context['esab/accordionBorderStyle'],
			headingTag: context['esab/headingTag'],
			iconPosition: context['esab/iconPosition'],
			collapsedIcon: context['esab/collapsedIcon'],
			expandedIcon: context['esab/expandedIcon'],
			headerSeparator: context['esab/headerSeparator'],
			headerSeparatorColor: context['esab/headerSeparatorColor'],
			headerSeparatorHeight: context['esab/headerSeparatorHeight'],
			headerSeparatorStyle: context['esab/headerSeparatorStyle'],
			headerTopPadding: context['esab/headerTopPadding'],
			headerBottomPadding: context['esab/headerBottomPadding'],
			headerLeftPadding: context['esab/headerLeftPadding'],
			headerRightPadding: context['esab/headerRightPadding'],
		});
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__('Accordion Status', 'easy-accordion-block')}
					>
						<ToggleControl
							label={__('Active on Load', 'easy-accordion-block')}
							checked={active}
							onChange={() => setAttributes({ active: !active })}
							help={
								active &&
								__(
									'You have made it Active on Load',
									'easy-accordion-block'
								)
							}
						/>
					</PanelBody>
				</InspectorControls>
				<div
					className={className}
					style={{
						border: `${accordionBorderWidth}px ${accordionBorderStyle} ${accordionBorderColor}`,
					}}
				>
					<div
						className={`esab__head ${
							iconPosition ? 'esab__head_reverse' : ''
						}`}
						style={{
							paddingTop: `${headerTopPadding}px`,
							paddingBottom: `${headerBottomPadding}px`,
							paddingLeft: `${headerLeftPadding}px`,
							paddingRight: `${headerRightPadding}px`,
						}}
					>
						<div className="esab__heading_txt">
							<RichText
								tagName={headingTag}
								className={'esab__heading_tag'}
								value={heading}
								onChange={(content) =>
									setAttributes({ heading: content })
								}
								placeholder={__(
									'heading….',
									'easy-accordion-block'
								)}
								allowedFormats={['core/bold', 'core/italic']}
							/>
						</div>
						<div className="esab__icon">
							<div className="esab__collapse">
								{icons[collapsedIcon]}
							</div>
							<div className="esab__expand">
								{icons[expandedIcon]}
							</div>
						</div>
					</div>
					<div
						className="esab__body"
						style={{
							borderTop: headerSeparator
								? `${headerSeparatorHeight}px ${headerSeparatorStyle} ${headerSeparatorColor}`
								: 'none',
						}}
					>
						<InnerBlocks
							allowedBlocks={true}
							template={[
								[
									'core/paragraph',
									{
										placeholder: __(
											'type content or press / to add block..',
											'easy-accordion-block'
										),
									},
								],
							]}
						/>
					</div>
				</div>
			</Fragment>
		);
	},
	save: (props) => {
		const { attributes } = props;
		const {
			active,
			accordionBorderWidth,
			accordionBorderColor,
			accordionBorderStyle,
			heading,
			headingTag,
			iconPosition,
			collapsedIcon,
			expandedIcon,
			headerSeparator,
			headerSeparatorColor,
			headerSeparatorHeight,
			headerSeparatorStyle,
			headerTopPadding,
			headerBottomPadding,
			headerLeftPadding,
			headerRightPadding,
		} = attributes;
		return (
			<div
				{...useBlockProps.save()}
				style={{
					border: `${accordionBorderWidth}px ${accordionBorderStyle} ${accordionBorderColor}`,
				}}
			>
				<div
					className={`esab__head ${
						iconPosition ? 'esab__head_reverse' : ''
					}`}
					style={{
						paddingTop: `${headerTopPadding}px`,
						paddingBottom: `${headerBottomPadding}px`,
						paddingLeft: `${headerLeftPadding}px`,
						paddingRight: `${headerRightPadding}px`,
					}}
				>
					<div className="esab__heading_txt">
						<RichText.Content
							tagName={headingTag}
							className={'esab__heading_tag'}
							value={heading}
						/>
					</div>
					<div
						className={`esab__icon ${
							active ? 'esab__active_icon' : ''
						}`}
					>
						<div className="esab__collapse">
							{icons[collapsedIcon]}
						</div>
						<div className="esab__expand">
							{icons[expandedIcon]}
						</div>
					</div>
				</div>
				<div
					className={`esab__body ${active ? 'esab__active' : ''}`}
					style={{
						borderTop: headerSeparator
							? `${headerSeparatorHeight}px ${headerSeparatorStyle} ${headerSeparatorColor}`
							: 'none',
					}}
				>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
});