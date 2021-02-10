<?php

class Gutenberg_Alert_Block {
	public function __construct() {
		$this->init();
	}

	public function init() {
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_filter( 'block_categories', array( $this, 'register_block_categories' ), 10, 2 );
	}

	public function register_blocks() {
		$asset_file = include( plugin_dir_path( __FILE__ ) . '../build/index.asset.php' );

		wp_register_script(
			'gutenberg-alert-block',
			plugins_url( '../build/index.js', __FILE__ ),
			$asset_file['dependencies'],
			$asset_file['version']
		);

		wp_register_style(
			'gutenberg-alert-block-editor',
			plugins_url( '../build/index.css', __FILE__ ),
			array( 'wp-edit-blocks' ),
			filemtime( plugin_dir_path( __FILE__ ) . '../build/index.css' )
		);

		wp_register_style(
			'gutenberg-alert-block',
			plugins_url( '../build/style-index.css', __FILE__ ),
			array(),
			filemtime( plugin_dir_path( __FILE__ ) . '../build/style-index.css' )
		);

		register_block_type( 'gutenberg-alert-block/info', array(
			'editor_script' => 'gutenberg-alert-block',
			'editor_style'  => 'gutenberg-alert-block-editor',
			'style'         => 'gutenberg-alert-block',
		) );
	}

	public function register_block_categories( $categories ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'gutenberg-alert-blocks',
					'title' => 'Alert Blocks',
				),
			)
		);
	}
}